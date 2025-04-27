import {
  Box,
  Button,
  Container,
  Flex,
  Overlay,
  Text,
  Title,
} from "@mantine/core";
import { bunnaStyles } from "./bunnaStyles";

export function Bunna() {
  return (
    <Box style={bunnaStyles.wrapper}>
      <Overlay color="#000" opacity={1} zIndex={1} />
      <Overlay color="#000" opacity={0.7} zIndex={1} />

      <Box style={bunnaStyles.inner}>
        <Title style={bunnaStyles.title}>Welcome to Buna Bank BMART</Title>

        <Container size={640}>
          <Text size="lg" style={bunnaStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Container>

        <Flex gap="sm" style={bunnaStyles.controls}>
          <Button color="primary" size="xs">
            About Us
          </Button>
          <Button variant="white" size="xs">Contact Us</Button>
        </Flex>
      </Box>
    </Box>
  );
}
