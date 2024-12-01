import db from "../models"
import _, { isBuffer } from "lodash";

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getDataByUrl = async (url) => {
    try {


        let data = null;
        // `https://www.metaweather.com/api/location/search/?query=${keyword}`
        //search location
        if (url.includes("api/location/search/?query")) {
            let keyword = url.split("?query=");
            let term = keyword[1].trim().replace("/", "");
            data = await db.Location.findAll({
                where: {
                    title: { [Op.like]: `%${term}%` }
                }
            })

        }

        // https://www.metaweather.com/api/location/${woeid}/
        //weather by location (woeid)
        if (url.includes('api/location/') && !url.includes("api/location/search/?query")) {
            let woeid = url.split("/location/")[1];
            woeid = woeid.replace("/", "");
            let location = await db.Location.findOne({
                raw: true,
                where: {
                    woeid: woeid,
                }
            })
            if (location && !_.isEmpty(location)) {
                data = await db.Weather.findAll({
                    attributes: ["id", "applicable_date",
                        "weather_state_name", "max_temp", "min_temp", "wind_direction_compass",
                        "wind_speed"],
                    where: {
                        location_id: location.id
                    },
                    raw: true
                })

                let result = [];

                data.map(item => {
                    result.push(item)
                })

                //build  response data
                data = {
                    title: location.title,
                    time: new Date(),
                    consolidated_weather: result
                };
            }
        }

        return data;
    } catch (error) {
        console.log(">>>> error: ", error)
    }
}

module.exports = {
    getDataByUrl
}