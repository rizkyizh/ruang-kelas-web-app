import { Box, Button, Icon, Text } from '@hudoro/admin';
import defaultImg from '@core/assets/svg/preview_img_default.svg';
import MarkdownRenderer from '@features/_global/components/MarkdownRenderer';
import { CourseMemberModel } from '@core/models/course';
import { DetailCourseSection } from './DetailCourse/DetailCourseSection';
import { useAtom } from 'jotai';
import { confirmAddCourseDialogAtom } from '../store';

interface IDetailCourse {
  data: CourseMemberModel;
}
export function DetailCourse(props: IDetailCourse) {
  const [, setDialogChart] = useAtom(confirmAddCourseDialogAtom);
  return (
    <Box
      customWidth={'2000px'}
      customHeight={'1340px'}
      overflow="overflow-y-scroll"
    >
      <DetailCourseSection
        title={props.data.title}
        actionContainer={{
          width: 'width-full'
        }}
        action={
          <Button
            onClick={() => {
              setDialogChart(prev => ({
                ...prev,
                show: true,
                isCourse: props.data.id,
                nameCourse: props.data.title,
                isRegistered: props.data.isRegistered
              }));
            }}
            iconLeft={<Icon name="Cart4" size="md" />}
            secondary
          />
        }
      >
        <Box direction="row" gap="md">
          <Box
            style={{
              width: '50%',
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
          <Box
            gap="md"
            direction="column"
            width="width-1-2"
            justify="space-evenly"
          >
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                Trainer
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.instructor}
              </Text>
            </Box>
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                Course Fee
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.price}
              </Text>
            </Box>
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                Period
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.periode} Bulan
              </Text>
            </Box>
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                Start Date
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.start}
              </Text>
            </Box>
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                End Date
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.end}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box gap="md" marginTop="md">
          <Box direction="column">
            <Text fontSize="sm" fontWeight="semibold">
              Description
            </Text>
            <MarkdownRenderer markdown={props.data.description} />
          </Box>
        </Box>
      </DetailCourseSection>
    </Box>
  );
}
