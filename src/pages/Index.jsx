import React, { useState } from "react";
import { Box, Button, Center, Container, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Mood card data
const moodCards = [
  { mood: "Happy", image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbnxlbnwwfHx8fDE3MTIzODU2Nzd8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { mood: "Energized", image: 'https://images.unsplash.com/photo-1663426242582-7c707af07128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ2l6ZWQlMjBwZXJzb258ZW58MHx8fHwxNzEyMzg1NjgyfDA&ixlib=rb-4.0.3&q=80&w=1080' },
  { mood: "Tired", image: 'https://images.unsplash.com/photo-1554188572-9d184b57d8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aXJlZCUyMHBlcnNvbnxlbnwwfHx8fDE3MTIzODU2ODV8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { mood: "Anxious", image: 'https://images.unsplash.com/photo-1473106995954-101fc128abc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbnhpb3VzJTIwcGVyc29ufGVufDB8fHx8MTcxMjM4NTY5NHww&ixlib=rb-4.0.3&q=80&w=1080' },
  { mood: "Motivated", image: 'https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWQlMjBwZXJzb258ZW58MHx8fHwxNzEyMzg1Njk1fDA&ixlib=rb-4.0.3&q=80&w=1080' },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const toast = useToast();

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex < moodCards.length - 1 ? prevIndex + 1 : prevIndex));
    }

    toast({
      title: `You're feeling ${moodCards[currentIndex].mood.toLowerCase()}.`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Center>
        <Heading mb={6}>How are you feeling today?</Heading>
      </Center>
      <Flex justifyContent="center" alignItems="center" mb={6}>
        <Button onClick={() => handleSwipe("left")} isDisabled={currentIndex === 0} leftIcon={<FaChevronLeft />} mr={2}>
          Previous
        </Button>
        <Button onClick={() => handleSwipe("right")} isDisabled={currentIndex === moodCards.length - 1} rightIcon={<FaChevronRight />} ml={2}>
          Next
        </Button>
      </Flex>
      <Stack spacing={4} align="center">
        <Box p={4} borderRadius="lg" boxShadow="lg" bg="white" w="full" maxW="md" textAlign="center">
          <Image src={moodCards[currentIndex].image} borderRadius="md" boxSize="200px" objectFit="cover" alt={`Image representing someone feeling ${moodCards[currentIndex].mood.toLowerCase()}`} />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            {moodCards[currentIndex].mood}
          </Text>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
