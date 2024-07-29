import {
  Box,
  Flex,
  Section,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabsLists,
  Text
} from '@hudoro/admin';
import { useCatalogCourses } from '../hooks/useCatalogCourses';
import { CourseItemCard } from '../components/CourseItemCard';

import { useState } from 'react';
import { CourseMemberModel } from '@core/models/course';
import { DetailCourse } from '../components/DetailCourse';
import CatalogSection from '../components/Section';
import { ConfirmAddCourseDialog } from '../components/ConfirmAddCourse';
import LayoutContainer from '@features/_global/components/Container';

export function CatalogCourseView() {
  const [itemSelected, setItemSelected] = useState<CourseMemberModel>();
  const { items } = useCatalogCourses();

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
        <Flex gap="sm">
          <CatalogSection
            title="Daftar Kelas Tersedia"
            titleTag={`${items?.length}`}
            headerProps={{ borderBottom: false }}
          // action={<Button onClick={() => refetch()}>refresh</Button>}
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
          </CatalogSection>
          <Section title="Alur Pendaftaran Kelas">
            <Tabs activeTab={0}>
              <TabsLists>
                <Tab>Tata Cara Pendaftaran</Tab>
                <Tab>Link Pretest</Tab>
              </TabsLists>
              <TabPanels>
                <TabPanel>
                  <Box gap="md" paddingBlock="md">
                    <Text>1. Pengguna mengakses halaman pendaftaran kelas</Text>
                    <Text>
                      2. Pengguna melihat informasi tentang kelas yang tersedia
                    </Text>
                    <Text>
                      3. Pengguna memutuskan untuk mendaftar dan mengklik link
                      pre-test
                    </Text>
                    <Text>
                      4. Pengguna mengerjakan pre-test menggunakan alamat email
                      akun terdaftar
                    </Text>
                    <Text>
                      5. Setelah mengerjakan pre-test Pengguna konfirmasi dengan
                      checklist "Saya sudah mengerjakan pre test" di tombol
                      keranjang detail kelas
                    </Text>
                    <Text>6. Kemudian Click tombol Daftar Kelas</Text>
                    <Text>7. Pengguna menunggu proses dari admin</Text>
                    <Text>
                      8. jika diterima make kelas akan masuk ke dashboard
                    </Text>
                    <Text>9. Pengguna dapat mengakses Kelas tersebut</Text>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    fullWidth
                    gap="md"
                    paddingBlock="md"
                    customHeight={'340px'}
                  >
                    ini adalah link pretest
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </Flex>
        {itemSelected && <DetailCourse data={itemSelected} />}
      </Box>
      <ConfirmAddCourseDialog />
    </LayoutContainer>
  );
}
