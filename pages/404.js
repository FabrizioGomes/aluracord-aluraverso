import { Box, Button, Text} from '@skynexui/components';
import appConfig from '../config.json'

export default function pagina404() {
    return (

        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary['900'],
                backgroundImage: 'url(https://the1a.org/wp-content/uploads/sites/4/2019/02/spider-man-into-the-spider-verse-dom-tao410.1033_lm_w6_dgordon-cropped-768x655.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            }}>
            <Box
                styleSheet={{
                    alignItems: 'center',
                    width: '100%', maxWidth: '500px',
                    borderRadius: '5px', padding: '32px', margin: '16px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    // backgroundColor: appConfig.theme.colors.primary['900'],
                }}>
                <Text
                    tag="h3"
                    styleSheet={{
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 500,
                        color: appConfig.theme.colors.primary['400']
                    }}>
                    Nossos sensores aranha detectaram que a página que você está tentando acessar não existe!
                </Text>
                <Button
                    type='submit'
                    label='Voltar para página de login'
                    fullWidth
                    buttonColors={{
                        contrastColor: appConfig.theme.colors.neutrals["000"],
                        mainColor: appConfig.theme.colors.primary['900'],
                        mainColorLight: appConfig.theme.colors.primary['400'],
                        mainColorStrong: appConfig.theme.colors.primary['600'],
                    }}
                >

                </Button>
            </Box>
        </Box>
    )
}