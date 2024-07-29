import { CourseMemberModel } from '@core/models/course';
import { Box, Text } from '@hudoro/admin';
import defaultImg from '@core/assets/svg/preview_img_default.svg';
interface ICourseCard {
  data: CourseMemberModel;
  onClick: (record: CourseMemberModel) => void;
}
export function CourseItemCard(props: ICourseCard) {
  return (
    <Box
      onClick={() => props.onClick(props.data)}
      gap="sm"
      borderWidth="border"
      borderRadius="rounded-base"
      borderStyle="border-solid"
      flex="3"
      style={{
        borderColor: 'var(--hsd-ui-utility-fill-default)'
      }}
      // width="width-full"
      customMinWidth={'300px'}
      paddingBottom="sm"
      cursor="pointer"
      onMouseOver={e => {
        (e.currentTarget as HTMLElement).style.backgroundColor = '#EDF0F2';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLElement).style.backgroundColor = '';
      }}
    >
      <Box
        style={{
          width: '100%',
          height: '162px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <img
          src={props.data.thumbnail || defaultImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      <Box direction="row" justify="space-between" paddingInline="sm">
        <Text fontFamily="Poppins" fontWeight="medium" fontSize="md">
          {props.data.title}
        </Text>
      </Box>
      {/* <Box paddingInline="sm">
        <Text className="truncated-text">{props.data.description}</Text>
      </Box> */}
      <Box direction="row" justify="space-between" paddingInline="sm">
        <Text fontFamily="Poppins" fontWeight="normal" fontSize="sm">
          {props.data.periode} Bulan
        </Text>
        <Text fontFamily="Poppins" fontWeight="normal" fontSize="sm">
          {props.data.price}
        </Text>
      </Box>
    </Box>
  );
}
