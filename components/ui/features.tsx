import {
  Card,
  Container,
  Flex,
  SimpleGrid,
  Spoiler,
  Text,
  Title,
  Anchor,
} from "@mantine/core";
import { featureStyles } from "./featureStyles";
import { TelescopeIcon, CrosshairIcon, GemIcon, ArrowDown, ArrowUp } from "lucide-react";

const mockdata = [
  {
    title: "Vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolorCras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    icon: TelescopeIcon,
  },
  {
    title: "Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolorCras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    icon: CrosshairIcon,
  },
  {
    title: "Values",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolorCras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    icon: GemIcon,
  },
];

export function FeaturesCards() {
  const features = mockdata.map((feature) => (
    <Card
      style={{
        borderLeftColor: "var(--mantine-color-primary-9)",
        borderLeftWidth: 5,
      }}
      withBorder
      key={feature.title}
      shadow="md"
      radius="sm"
      padding="xl"
    >
      <Flex gap={10} align="center">
        {feature.icon && <feature.icon size={20} />}
        <Text fz="lg" fw={500} style={featureStyles.cardTitle}>
          {feature.title}
        </Text>
      </Flex>
      <Spoiler
        maxHeight={100}
        showLabel={
          <Flex mt="sm" align="center" justify="flex-end" gap={5}>
            <Anchor size="xs" >
              more{" "}
            </Anchor>
            <ArrowDown size={10} />
          </Flex>
        }
        hideLabel={
          <Flex mt="sm" align="center" justify="flex-end" gap={5}>
            <Anchor size="xs" >
              less{" "}
            </Anchor>
            <ArrowUp size={10} />
          </Flex>
        }
      >
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Spoiler>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} style={featureStyles.title} ta="center" mt="sm">
        Who we are
      </Title>

      <Text c="dimmed" style={featureStyles.description} ta="center" mt="md">
        We place our customers at the core of our value, to serve them with compassion and a level of professionalism unmatched by any other bank. With more than 14,000 shareholder and growing, we are the strongest public-based private bank in Ethiopia.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
