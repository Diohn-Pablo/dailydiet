import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { Home } from '@screens/Home';

export default function App() {
    const [fontsLoader] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}