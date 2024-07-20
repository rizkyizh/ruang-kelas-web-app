import { Box, PageLayout, Section } from '@hudoro/admin';
import { useMyCourses } from '../hooks/useMyCourses';
import { CourseCard } from '../components/CourseCard';

export default function MyCourseView() {
  const { items, isLoading } = useMyCourses();
  return (
    <PageLayout title="My Courses" titleTag={`${items?.length}`}>
      <Section
        headerProps={{
          borderBottom: false
        }}
      >
        <Box gap="md" direction="row" flexWrap="wrap">
          {isLoading
            ? 'Loading...'
            : items?.map((item, idx) => {
                return <CourseCard key={idx} title={item.course.title} />;
              })}
        </Box>
      </Section>
    </PageLayout>
  );
}
