import { Bunna } from "../components/ui/bunna";
import LayoutShell from "../components/layout/shell";
import { FeaturesCards } from "../components/ui/features";
import News from "../components/ui/news";
import {
  Card,
  Flex,
  SimpleGrid,
  Text,
  Title,
  Container,
  Box,
} from "@mantine/core";
import {
  AwardIcon,
  GiftIcon,
  Globe2Icon,
  LifeBuoyIcon,
  MegaphoneIcon,
  Waypoints,
} from "lucide-react";
import { featureStyles } from "../components/ui/featureStyles";

export default function Home() {
  return (
    <LayoutShell>
      <Bunna />
      <FeaturesCards />
      <News />
    </LayoutShell>
  );
}
