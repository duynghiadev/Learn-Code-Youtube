require('dotenv').config();
import axios from 'axios';


let getHomePage = (req, res) => {

    return res.send('hello world with haryphamdev')
};

let getDataByURL = async (req, res) => {
    try {
        let url = req.body.url;
        if (!url) {
            return res.status(200).json({
                message: "Missing URL params..."
            })
        }
        let data = await axios.get(url);
        return res.status(200).json({
            ...data.data
        });

    } catch (e) {
        return res.status(500).json({
            message: "Something wrong...",
            detail: JSON.stringify(e.message)
        })
    }


}

module.exports = {
    getHomePage: getHomePage,
    getDataByURL: getDataByURL
}