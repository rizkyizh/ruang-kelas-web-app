import LayoutContainer from '@features/_global/components/Container.tsx';
import { Box, Button, Flex, Section } from '@hudoro/admin';
import { useCatalogCourses } from '../hooks/useCatalogCourses';
import { CourseItemCard } from '../components/CourseItemCard';

import { useState } from 'react';
import { CourseModel } from '@core/models/course';
import { DetailCourse } from '../components/DetailCourse';

export function CatalogCourseView() {
  const [itemSelected, setItemSelected] = useState<CourseModel>();
  const { items, refetch } = useCatalogCourses();

  const renderItems = () => {
    return items?.map((item, index) => (
      <CourseItemCard
        key={index}
        onClick={e => setItemSelected(e)}
        data={{ ...item }}
      />
    ));
  };
  return (
    <LayoutContainer>
      <Box direction="row" gap="sm">
        <Section
          title="Daftar Kelas Tersedia"
          titleTag={`${items?.length}`}
          headerProps={{ borderBottom: false }}
          action={<Button onClick={() => refetch()}>refresh</Button>}
        >
          <Box
            bg="gray-50"
            width="width-full"
            overflow="overflow-scroll"
            customHeight={'calc(100vh - 200px'}
          >
            <Flex
              style={{
                overflowX: 'auto'
              }}
              wrap="wrap"
              justify="flex-start"
              direction="row"
              gap="lg"
            >
              {renderItems()}
            </Flex>
          </Box>
        </Section>
        {itemSelected && <DetailCourse data={itemSelected} />}
      </Box>
    </LayoutContainer>
  );
}
