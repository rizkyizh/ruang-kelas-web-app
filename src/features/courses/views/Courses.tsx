import HudoroTable from '@features/_global/components/TableMaster';
import { UIEmpty } from '@features/_global/components/UIEmpty';
import { Badges, Button, Icon, PageLayout, Section, Text } from '@hudoro/admin';
import {
  courseCreationDrawerAtom,
  courseDeleteConfirmationDialogAtom
} from '../stores';
import { useAtom } from 'jotai';
import { CourseModel } from '@core/models/course';
import { useCourses } from '../hooks/useCourses';
import { CourseDeleteConfirmationDialog } from '../components/Dialog/CourseDeleteConfirmationDialog';
import { CourseCreationDrawer } from '../components/Drawer/CourseCreationDrawer';
import { useNavigate } from 'react-router-dom';

const Dot = () => (
  <Icon
    name="Dot"
    size="md"
    style={{ color: 'var(--Badge-Danger-Text, rgba(201, 24, 74, 1))' }}
  />
);
const DotSuccess = () => (
  <Icon name="Dot" size="md" style={{ color: '#15803d' }} />
);

export default function CoursesView() {
  const navigate = useNavigate();
  const [, setCreationDrawer] = useAtom(courseCreationDrawerAtom);
  const [, setDeleteConfirmationDialog] = useAtom(
    courseDeleteConfirmationDialogAtom
  );
  const { items, isLoading } = useCourses();

  const handleUpdate = (item: CourseModel) => {
    setCreationDrawer(prev => ({
      ...prev,
      action: 'UPDATE',
      show: true,
      dataState: {
        ...item
      }
    }));
  };
  const handleDelete = (id: string | number, item: CourseModel) => {
    setDeleteConfirmationDialog(prev => ({
      ...prev,
      show: true,
      idItemSelected: id,
      itemName: item.title
    }));
  };
  const handleDetail = (id: string | number) => {
    navigate(`${id}`);
  };

  return (
    <>
      <PageLayout
        title="Course"
        titleTag={`${items?.length}`}
        action={[
          {
            title: 'Create Course',
            onClick: () => {
              setCreationDrawer(prev => ({ ...prev, show: true }));
            }
          }
        ]}
      >
        <Section>
          <HudoroTable
            records={items}
            isLoading={isLoading}
            handleDetail={handleDetail}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            emptyState={
              <UIEmpty
                message="There is no Course list"
                message2="Create your first Course now"
                button={
                  <Button
                    primary
                    onClick={() =>
                      setCreationDrawer(prev => ({
                        ...prev,
                        show: true,
                        status: 'ADD'
                      }))
                    }
                  >
                    Create Course
                  </Button>
                }
              />
            }
            columns={[
              {
                accessor: 'ID',
                render: ({ id }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {id}
                  </Text>
                )
              },
              {
                accessor: 'Title',
                render: ({ title }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {title}
                  </Text>
                )
              },
              {
                accessor: 'Status',
                render: ({ is_enabled }) =>
                  is_enabled ? (
                    <Badges
                      variant="success"
                      text="Active"
                      size="md"
                      border
                      LeftIcon={DotSuccess}
                    />
                  ) : (
                    <Badges
                      variant="danger"
                      text="inActive"
                      size="md"
                      border
                      LeftIcon={Dot}
                    />
                  )
              }
            ]}
          />
        </Section>
      </PageLayout>
      <CourseCreationDrawer />
      <CourseDeleteConfirmationDialog />
    </>
  );
}
