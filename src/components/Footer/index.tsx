import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

function Footer() {
    const { t } = useTranslation()
  return <S.FooterContainer>
    <Box>
      &copy; {t('footer.copyright', {date: new Date().getFullYear()})}
    </Box>
  </S.FooterContainer>;
}

export default Footer;
