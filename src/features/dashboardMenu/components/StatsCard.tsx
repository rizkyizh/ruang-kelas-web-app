import { Box, Icon, IconProps, Text } from '@hudoro/admin';
import { useNavigate } from 'react-router-dom';
interface IStatsCard {
  value: string;
  label: string;
  icon: IconProps;
  to?: string;
}
export function StatsCard(props: IStatsCard) {
  const navigate = useNavigate();
  return (
    <Box
      bg="gray-50"
      fullWidth
      gap="md"
      padding="md"
      direction="row"
      justify="space-between"
      borderRadius="rounded-lg"
      onClick={() => {
        if (props.to) {
          navigate(props.to);
        }
      }}
      cursor="pointer"
    >
      <Box gap="lg" justify="space-between">
        <Text fontSize="3xl" fontWeight="bold">
          {props.value}
        </Text>
        <Text>{props.label}</Text>
      </Box>
      <Icon
        name={props.icon.name}
        size="lg"
        style={{
          minWidth: '100px',
          minHeight: '100px'
        }}
      />
    </Box>
  );
}
