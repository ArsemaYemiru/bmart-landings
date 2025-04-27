import {
  AppShell,
  Burger,
  Button,
  Container,
  Flex,
  Group,
  Menu,
  Image,
  Stack,
  Text,
  Box,
  Title,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "@/assets/imageClear.png"; 
import {
  ArrowRight,
  Dot,
  Facebook,
  Instagram,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { useRouter } from "next/router"; 
import { containerHeight } from "@/lib/libs";

export default function BaseShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();
  const path = router.asPath;

  const handleNavigation = (path: string) => {
    router.push(path);
    window.scrollTo(0, 0);
  };

  const menu = [
    { name: "Home", path: "/", active: path === "/" },
    {
      name: "About Us",
      path: "/about",
      active: path.startsWith("/about"),
      sub: [
        { name: "Help", path: "/about/help", active: path === "/about/help" },
        { name: "User Guide", path: "/about/guide", active: path === "/about/guide" },
        { name: "FAQ", path: "/about/faq", active: path === "/about/faq" },
      ],
    },
    { name: "Contact", path: "/contact", active: path === "/contact" },
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 150 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding={0}
    >
      {/* HEADER */}
      <AppShell.Header>
        <Container h="100%" size="xl">
          <Group h="100%">
            <Group justify="space-between" style={{ flex: 1 }}>
              <Flex h="100%" align="center" gap="xs">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Image radius="md" h={40} w="auto" fit="contain" src={Logo.src} alt="Buna Logo" />
              </Flex>
              <Group ml="xl" gap="xs" visibleFrom="sm">
                {menu.map((item, index) => (
                  <Menu
                    width={200}
                    key={index}
                    position="bottom-start"
                    trigger="click-hover"
                    shadow="md"
                    withArrow
                  >
                    <Menu.Target>
                      <Button
                        size="xs"
                        color={item.active ? "primary" : "dark"}
                        variant={item.active ? "light" : "subtle"}
                        onClick={() => item.sub ? handleNavigation(item.sub[0].path) : handleNavigation(item.path)}
                      >
                        <Text size="xs" fw={500}>
                          {item.name}
                        </Text>
                      </Button>
                    </Menu.Target>
                    {item.sub && (
                      <Menu.Dropdown>
                        {item.sub.map((subItem, subIndex) => (
                          <Menu.Item
                            key={subIndex}
                            rightSection={
                              subItem.active ? <Dot size={22} /> : <ArrowRight size={12} />
                            }
                            onClick={() => handleNavigation(subItem.path)}
                          >
                            {subItem.name}
                          </Menu.Item>
                        ))}
                      </Menu.Dropdown>
                    )}
                  </Menu>
                ))}
              </Group>

              {/* Contact Button */}
              <Button
                leftSection={<Phone size={12} />}
                size="xs"
                color="primary"
                variant="filled"
                onClick={() => handleNavigation("/contact")}
              >
                <Text size="xs" fw={500}>
                  Contact
                </Text>
              </Button>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      {/* NAVBAR */}
      <AppShell.Navbar py="md" px={4}>
        {menu.map((item, index) => (
          <Button
            fullWidth
            variant={item.active ? "filled" : "subtle"}
            justify="space-between"
            rightSection=">"
            key={index}
            onClick={() => {
              handleNavigation(item.path);
              toggle();
            }}
          >
            {item.name}
          </Button>
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Flex
          w="100%"
          direction="column"
          style={{ minHeight: "calc(100vh - 60px)" }}
          justify="space-between"
        >
          <Box flex={1}>{children}</Box>

          {/* FOOTER */}
          <Box bg="dark">
            <Container
              style={{ height: containerHeight }}
              size="xl"
              px="md"
            >
              <Flex w="100%" h={150} align="center" justify="space-between">
                <Flex
                  direction="column"
                  h={105}
                  align="flex-start"
                  justify="space-between"
                >
                  <Image
                    src={Logo.src}
                    alt="Buna Logo"
                    radius="md"
                    h={70}
                    w="auto"
                    fit="contain"
                  />
                  <Text size="xs" c="dimmed">
                    All Rights Reserved. © {new Date().getFullYear()} BUNA-ETHIOPIA
                  </Text>
                </Flex>
                <Stack maw={200} gap={10}>
                  <Text size="xs" c="white" fw={900}>
                    Follow Us
                  </Text>
                  <Text size="xs" c="dimmed">
                    Stay connected with Buna Ethiopia on social media to engage
                    with our community.
                  </Text>
                  <Flex w="100%" gap="sm" justify="flex-start">
                    <Instagram color="white" size={18} />
                    <Facebook color="white" size={18} />
                    <Twitter color="white" size={18} />
                    <Youtube color="white" size={20} />
                  </Flex>
                </Stack>
              </Flex>
            </Container>
          </Box>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}
