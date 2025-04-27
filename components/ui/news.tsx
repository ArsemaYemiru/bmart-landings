import {
  Anchor,
  Card,
  CardSection,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Title,
  Modal,
} from "@mantine/core";
import { useState } from "react";

export default function News({ alt }: { alt?: boolean }) {
  const [opened, setOpened] = useState(false); // Modal state
  const [selectedContent, setSelectedContent] = useState<string | null>(null); // Store content for modal
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null); // Store title for modal

  const images = ["https://barefootethiopia.org/uploads/blog-01.jpg"];
  const sampleList = alt ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3];
  
  // Function to open modal with specific title and content
  const openModal = (title: string, content: string) => {
    setSelectedTitle(title);
    setSelectedContent(content);
    setOpened(true);
  };

  return (
    <Container size={alt ? "xl" : "lg"} py={alt ? 0 : "xl"}>
      {!alt && (
        <Flex align="center" justify="space-between">
          <Title order={2} ta="left" mt="sm">
            Recent change logs
          </Title>
          <Anchor size="xs">more</Anchor>
        </Flex>
      )}

      <SimpleGrid mt={alt ? 0 : "lg"} cols={{ base: 1, md: 3 }} spacing="xl">
        {sampleList.map((item, index) => (
          <Card shadow="md" withBorder key={index}>
            <CardSection>
              <Image w="100%" fit="contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcKRltk1Xn9q8pqilzxJO6tsjYNpWNBNH_A&s" />
            </CardSection>
            <CardSection withBorder inheritPadding>
              <Title mt="md" order={5}>
                Banking Platform Updates
              </Title>
              <Text mb="md" size="xs" c="dimmed" mt="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                Cras elementum ultrices diam.
              </Text>
              <Flex mb="md" justify="flex-end">
                <Anchor size="xs" onClick={(e) => {e.preventDefault(); openModal("Banking Platform Updates", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.");}}>
                  Read More
                </Anchor>
              </Flex>
            </CardSection>
          </Card>
        ))}
      </SimpleGrid>

      {/* Modal for displaying full content */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={selectedTitle} // Dynamically set the title
        centered
        size="lg"
      >
        <Text>{selectedContent}</Text>
      </Modal>
    </Container>
  );
}
