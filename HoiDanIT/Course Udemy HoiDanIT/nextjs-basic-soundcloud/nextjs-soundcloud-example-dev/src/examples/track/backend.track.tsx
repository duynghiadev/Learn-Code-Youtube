'use client'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Container from '@mui/material/Container';
import { useHasMounted } from '@/utils/customHook';

const BackendTrack = () => {
    const hasMount = useHasMounted();

    if (!hasMount) return <></>
    return (

        <Container>
            <AudioPlayer
                autoPlay
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </Container>

    )
}

export default BackendTrack;