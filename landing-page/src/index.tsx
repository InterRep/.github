import {
    Button,
    ChakraProvider,
    ColorModeProvider,
    Container,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react"
import "@fontsource/inter"
import ReactDOM from "react-dom"
import { FaDiscord, FaGithub } from "react-icons/fa"
import theme from "./styles"

function App() {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeProvider options={{ initialColorMode: "dark", useSystemColorMode: false }}>
                <Container pt="40px" px="40px" maxW="container.xl">
                    <HStack justify="space-between">
                        <Image src="./interep-logo.png" alt="Interep logo" h={10} />

                        <HStack spacing="4">
                            <Link href="https://discord.gg/Tp9He7qws4" isExternal>
                                <Icon as={FaDiscord} w={7} h={7} />
                            </Link>
                            <Link href="https://github.com/interep-project" isExternal>
                                <Icon as={FaGithub} w={7} h={7} />
                            </Link>
                        </HStack>
                    </HStack>
                </Container>

                <VStack flex="1" textAlign="center" justify="center" mb="60px" px="8" maxWidth="700px">
                    <Heading as="h2" size="2xl">
                        Anti-sybil, as a service
                    </Heading>

                    <Text color="background.400" py="8">
                        Protect your reputation systems in order to build more inclusive environments.
                        <br />
                        Get started by trying out our web app.
                    </Text>

                    <Stack direction={["column", "row"]} spacing="3">
                        <Link href="https://kovan.interep.link" isExternal>
                            <Button colorScheme="primary">Launch app</Button>
                        </Link>
                        <Link href="https://docs.interep.link" isExternal>
                            <Button variant="outline">Read documentation</Button>
                        </Link>
                    </Stack>
                </VStack>

                <Container py="20px" px="40px" borderTopWidth="1px" maxW="container.xl">
                    <Stack direction={["column", "row"]} justify="space-between" align="center">
                        <Text fontSize="sm">© Interep | Privacy & Scaling Explorations</Text>

                        <HStack>
                            <Text fontSize="sm">Supported by</Text>
                            <Image src="./ethereum-icon.png" alt="Ethereum icon" h={8} />
                            <Link href="https://ethereum.foundation" fontSize="sm" isExternal>
                                Ethereum Foundation
                            </Link>
                        </HStack>
                    </Stack>
                </Container>
            </ColorModeProvider>
        </ChakraProvider>
    )
}

const root = document.getElementById("root")

ReactDOM.render(<App />, root)
