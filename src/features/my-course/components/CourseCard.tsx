import { Box, Button, Text } from '@hudoro/admin';

export function CourseCard({ title }: { title: string }) {
  return (
    <Box
      style={{
        width: '300px'
      }}
      direction="column"
      gap="lg"
      padding="md"
      borderWidth="border"
      borderRadius="rounded-base"
      borderStyle="border-solid"
      borderColor="gray-400"
      height="height-40"
      justify="space-between"
    >
      <Text fontSize="md" fontWeight="bold">
        {title}
      </Text>
      <Button disabled>Mulai</Button>
    </Box>
  );
}
