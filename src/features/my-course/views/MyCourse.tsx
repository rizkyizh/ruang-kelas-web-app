import { Box, PageLayout, Section } from '@hudoro/admin';
import { useMyCourses } from '../hooks/useMyCourses';
import { CourseCard } from '../components/CourseCard';
import { UIEmpty } from '@features/_global/components/UIEmpty';

export default function MyCourseView() {
  const { items, isLoading } = useMyCourses();
  return (
    <PageLayout title="My Courses" titleTag={`${items?.length}`}>
      <Section
        headerProps={{
          borderBottom: false
        }}
      >
        {items?.length === 0 ? (
          <UIEmpty message="Data empty" />
        ) : (
          <Box gap="md" direction="row" flexWrap="wrap">
            {isLoading
              ? 'Loading...'
              : items?.map((item, idx) => {
                return <CourseCard key={idx} title={item.course.title} />;
              })}
          </Box>
        )}
      </Section>
    </PageLayout>
  );
}
