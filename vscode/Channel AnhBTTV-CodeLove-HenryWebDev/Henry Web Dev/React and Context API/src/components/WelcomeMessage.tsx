import { Box } from "@material-ui/core";

interface WelcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({
  position,
  country = "Vietnam",
}: WelcomeMessageProps) => {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
