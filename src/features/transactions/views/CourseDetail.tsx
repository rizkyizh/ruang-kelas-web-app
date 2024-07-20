import { Box, HorizontalField, PageLayout, Section } from '@hudoro/admin';
import { useCourse } from '../hooks/useCourses';
import MarkdownRenderer from '@features/_global/components/MarkdownRenderer';
import { TextFormLabel } from '@features/_global/components';

export default function CourseDetailView() {
  const { items, isLoading } = useCourse();
  return (
    <PageLayout
      backButton={{
        title: 'Course',
        navigateTo: '/dashboard/courses',
        show: true
      }}
      title="Detail Course"
    >
      <HorizontalField
        maxRow={2}
        maxColumn={3}
        fields={[
          {
            label: 'Title',
            value: isLoading ? 'Loading...' : items?.title
          },
          {
            label: 'Instructor',
            value: isLoading ? 'Loading...' : items?.instructor
          },
          {
            label: 'Category',
            value: isLoading ? 'Loading...' : items?.category?.name
          },
          {
            label: 'Period',
            value: isLoading ? 'Loading...' : items?.periode + ' Bulan'
          },
          {
            label: 'Start',
            value: isLoading ? 'Loading...' : items?.start
          },
          {
            label: 'End',
            value: isLoading ? 'Loading...' : items?.end
          }
        ]}
      />
      <Section headerProps={{ borderBottom: false }}>
        <Box gap="md">
          <Box
            style={{
              width: '100%',
              height: '278px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <img
              src={
                // 'https://file-storage-dev.sgp1.digitaloceanspaces.com/tuvi-mobile/' +
                items?.thumbnail
              }
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <Box gap="md">
            <TextFormLabel fontSize="md" color="gray-400">
              Description
            </TextFormLabel>
            <MarkdownRenderer markdown={items?.description || ''} />
          </Box>
        </Box>
      </Section>
    </PageLayout>
  );
}
