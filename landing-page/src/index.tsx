import {
    Box,
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

                <Container mt="100px" mb="120px" maxW="container.lg">
                    <VStack spacing={["100px", "100px", "150px"]} align="left" px="3">
                        <Stack align="center">
                            <VStack
                                spacing={["6", "6", "12"]}
                                textAlign="center"
                                justify="center"
                                px="8"
                                maxWidth="700px"
                            >
                                <Image src="./illustration-1.svg" alt="Illustration 1" />

                                <Heading as="h2" size="2xl">
                                    Anti-sybil, as a service
                                </Heading>

                                <Text color="background.400">
                                    Protect your reputation systems in order to build more inclusive environments.
                                    <br />
                                    Get started by reading our documentation.
                                </Text>

                                <Stack direction={["column", "column", "row"]} spacing="3">
                                    <Link
                                        display={["none", "none", "block"]}
                                        href="https://kovan.interep.link"
                                        isExternal
                                    >
                                        <Button colorScheme="primary">Launch app</Button>
                                    </Link>
                                    <Link href="https://docs.interep.link" isExternal>
                                        <Button variant="outline">Read documentation</Button>
                                    </Link>
                                </Stack>
                            </VStack>
                        </Stack>

                        <Stack direction={["column", "column", "row"]} spacing="8" justify="space-between">
                            <VStack flex="1" spacing="10" align="left" maxWidth={[, , "500px"]}>
                                <Heading as="h2" size="xl">
                                    Provable, private identity
                                </Heading>

                                <Text color="background.400">
                                    If you are building a Web 3.0 community, don’t let the fear of scams, bots, or
                                    bullying squash your vision of privacy-first participation. Interep can help
                                    communities organized in digital spaces to grow in an inclusive fashion, promote
                                    fairness, and authenticate members as unique, human individuals.
                                </Text>
                            </VStack>

                            <Box flex="1" maxWidth={[, , "400px"]} px="4">
                                <Image src="./illustration-2.svg" alt="Illustration 2" />
                            </Box>
                        </Stack>

                        <Stack direction={["column", "column", "row"]} spacing="10" justify="space-between">
                            <VStack spacing="10" align="left" maxWidth={[, , "450px"]}>
                                <Heading as="h2" size="xl">
                                    Begin building communities on equality and trust
                                </Heading>

                                <Box flex="1" maxWidth="500px" px="4">
                                    <Image src="./illustration-3.svg" alt="Illustration 2" />
                                </Box>
                            </VStack>

                            <VStack spacing="10" align="left" maxWidth={[, , "400px"]}>
                                <VStack align="left">
                                    <Heading as="h4" size="md">
                                        1. Integrate with our tools
                                    </Heading>

                                    <Text color="background.400">
                                        Interep offers{" "}
                                        <Link href="https://docs.interep.link/api" isExternal>
                                            APIs
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="https://github.com/interep-project/interep.js" isExternal>
                                            libraries
                                        </Link>{" "}
                                        to help curate authentic human communities on anonymous-first platforms.
                                    </Text>
                                </VStack>

                                <VStack align="left">
                                    <Heading as="h4" size="md">
                                        2. Authenticate anonymously
                                    </Heading>

                                    <Text color="background.400">
                                        Individuals can prove they are unique by joining an Interep group before using a
                                        DApp.
                                    </Text>
                                </VStack>

                                <VStack align="left">
                                    <Heading as="h4" size="md">
                                        3. Explore use cases
                                    </Heading>

                                    <Text color="background.400">
                                        Allow your users to mint an NFT, apply for a loan, cast a vote, fund a project,
                                        or join a web 3.0 social community anonymously. What will your team spin up?
                                    </Text>
                                </VStack>

                                <VStack align="left">
                                    <Heading as="h4" size="md">
                                        4. Fortify privacy pools
                                    </Heading>

                                    <Text color="background.400">
                                        Identity groups are shared across applications. This means that when your users
                                        and another app’s users authenticate using the same provider they will join the
                                        same privacy pool.
                                    </Text>
                                </VStack>
                            </VStack>
                        </Stack>

                        <Stack direction={["column", "column", "row"]} spacing="10" justify="space-between">
                            <VStack spacing="10" align="left" maxWidth={[, , "400px"]}>
                                <Heading as="h2" size="xl">
                                    We did the tedious work so you wouldn’t have to
                                </Heading>

                                <HStack justify="space-between" px="4">
                                    <Image src="./illustration-4.svg" alt="Illustration 6" />
                                    <Image src="./illustration-5.svg" alt="Illustration 5" />
                                    <Image src="./illustration-6.svg" alt="Illustration 4" />
                                </HStack>
                            </VStack>

                            <VStack align="left" spacing="2" maxWidth={[, , "400px"]}>
                                <VStack align="left" py="6" px="7" bg="background.800" borderRadius="4px">
                                    <Heading as="h4" size="md" color="background.200">
                                        Libraries
                                    </Heading>

                                    <Text color="background.300">
                                        <Link href="https://github.com/interep-project/interep.js" isExternal>
                                            Monorepo
                                        </Link>{" "}
                                        of Interep libraries, created to make Interep integration easier.
                                    </Text>
                                </VStack>

                                <VStack align="left" py="6" px="7" bg="background.800" borderRadius="4px">
                                    <Heading as="h4" size="md" color="background.200">
                                        API
                                    </Heading>

                                    <Text color="background.300">
                                        <Link href="https://docs.interep.link/api#reputation-service" isExternal>
                                            REST APIs
                                        </Link>{" "}
                                        to interact with our off-chain groups and a{" "}
                                        <Link href="https://docs.interep.link/api#subgraph" isExternal>
                                            subgraph
                                        </Link>{" "}
                                        to read on-chain data with GraphQL.
                                    </Text>
                                </VStack>

                                <VStack align="left" py="6" px="7" bg="background.800" borderRadius="4px">
                                    <Heading as="h4" size="md" color="background.200">
                                        Smart contracts
                                    </Heading>

                                    <Text color="background.300">
                                        Solidity{" "}
                                        <Link href="https://github.com/interep-project/contracts" isExternal>
                                            smart contract
                                        </Link>{" "}
                                        to manage decentralized groups and verify zero-knowledge proofs on-chain.
                                    </Text>
                                </VStack>
                            </VStack>
                        </Stack>

                        <Stack direction={["column", "column", "row"]} spacing="4" justify="space-between">
                            <VStack
                                flex="1"
                                align="left"
                                spacing="5"
                                py="6"
                                px="7"
                                bg="background.800"
                                borderRadius="4px"
                            >
                                <VStack align="left">
                                    <Heading as="h2" size="xl">
                                        1380
                                    </Heading>
                                    <Text>Commits</Text>
                                </VStack>

                                <Text color="background.300">
                                    Proof of identity tools can be complex to build. We’ve put in the effort to build
                                    one that prioritizes user privacy so that you can focus on building the next, great
                                    thing for the new internet.
                                </Text>
                            </VStack>

                            <VStack
                                flex="1"
                                align="left"
                                spacing="5"
                                py="6"
                                px="7"
                                bg="background.800"
                                borderRadius="4px"
                            >
                                <VStack align="left">
                                    <Heading as="h2" size="xl">
                                        12
                                    </Heading>
                                    <Text>Groups</Text>
                                </VStack>

                                <Text color="background.300">
                                    When users prove their identity on your platform, give them the option to choose
                                    from a growing list of Interep groups based on Web 2.0 providers and Web 3.0 assets.
                                </Text>
                            </VStack>

                            <VStack
                                flex="1"
                                align="left"
                                spacing="5"
                                py="6"
                                px="7"
                                bg="background.800"
                                borderRadius="4px"
                            >
                                <VStack align="left">
                                    <Heading as="h2" size="xl">
                                        +1
                                    </Heading>
                                    <Text>For privacy pools</Text>
                                </VStack>

                                <Text color="background.300">
                                    When partnering with Interep, your users can verify within groups of other
                                    anonymously authenticated users, increasing their anonymity.
                                </Text>
                            </VStack>
                        </Stack>
                    </VStack>
                </Container>

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
