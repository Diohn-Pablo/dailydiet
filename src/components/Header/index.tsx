import { Container, LogoImage, PerfilImage } from "./styles";

import Logo from '@assets/Logo.png';
import Perfil from '@assets/Ellipse.png';

export function Header() {
    return (
        <Container>
            <LogoImage source={Logo} />
            <PerfilImage source={Perfil} />
        </Container>
    );
}