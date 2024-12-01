'use client'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { useHasMounted } from '@/utils/customHook';

const CustomLayoutTrack = () => {
    const hasMounted = useHasMounted();
    if (!hasMounted) return (<></>)
    return (
        <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0 }}>
            <Container sx={{
                display: "flex", gap: 10,

                ".rhap_main": {
                    gap: "30px"
                }
            }}>
                <AudioPlayer
                    layout='horizontal-reverse'
                    autoPlay
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
                    onPlay={e => console.log("onPlay")}
                    style={{ boxShadow: "unset" }}
                // other props here
                />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", minWidth: 100 }}>
                    <div style={{ color: "#ccc" }}>Eric</div>
                    <div>Who am I ?</div>
                </div>
            </Container>
        </AppBar>
    )
}

export default CustomLayoutTrack;