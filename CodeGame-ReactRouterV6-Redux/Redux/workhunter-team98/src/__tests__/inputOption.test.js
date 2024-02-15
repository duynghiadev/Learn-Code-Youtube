import {screen,render,cleanup} from "@testing-library/react";
import InputOption from "../InputOption";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

test("input option test ", () => {

    render(<InputOption Icon={SubscriptionsIcon}  title= "Video" color= "#E7A33E" /> )
    const inputElement = screen.getByTestId("input-2")
   

})






