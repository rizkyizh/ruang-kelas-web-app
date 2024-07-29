import HudoroTable from '@features/_global/components/TableMaster';
import { UIEmpty } from '@features/_global/components/UIEmpty';
import { Badges, Icon, PageLayout, Section, Text } from '@hudoro/admin';
import { useTransactions } from '../hooks/useTransactions';
import { STATUS_TRANSACTION } from '@features/my-transaction/helper';
import { formatDate } from '@features/_global/helper';
import { TransactionCreationDrawer } from '../components/Drawer/TransactionCreationDrawer';
import { useAtom } from 'jotai';
import { TransactionModel } from '@core/models/transaction';
import { transCreationDrawerAtom } from '../stores';

export const Dot = () => (
  <Icon
    name="Dot"
    size="md"
    style={{ color: 'var(--Badge-Danger-Text, rgba(201, 24, 74, 1))' }}
  />
);
export const DotSuccess = () => (
  <Icon name="Dot" size="md" style={{ color: '#15803d' }} />
);

export default function TransactionView() {
  const [, setCreationDrawer] = useAtom(transCreationDrawerAtom);

  // const navigate = useNavigate();
  // const [, setCreationDrawer] = useAtom(courseCreationDrawerAtom);
  // const [, setDeleteConfirmationDialog] = useAtom(
  //   courseDeleteConfirmationDialogAtom
  // );
  const { items, isLoading } = useTransactions();

  const handleUpdate = (item: TransactionModel) => {
    setCreationDrawer(prev => ({
      ...prev,
      show: true,
      dataState: {
        ...item
      }
    }));
  };
  // const handleDelete = (id: string | number, item: CourseModel) => {
  //   setDeleteConfirmationDialog(prev => ({
  //     ...prev,
  //     show: true,
  //     idItemSelected: id,
  //     itemName: item.title
  //   }));
  // };
  // const handleDetail = (id: string | number) => {
  //   navigate(`${id}`);
  // };

  return (
    <>
      <PageLayout
        title="Transactions"
        titleTag={`${items?.length}`}
        // action={[
        //   {
        //     title: 'Create Course',
        //     onClick: () => {
        //       setCreationDrawer(prev => ({ ...prev, show: true }));
        //     }
        //   }
        // ]}
      >
        <Section>
          <HudoroTable
            records={items}
            isLoading={isLoading}
            // handleDetail={handleDetail}
            handleUpdate={handleUpdate}
            titleActionCustom={{
              update: 'Update Status'
            }}
            // handleDelete={handleDelete}
            emptyState={
              <UIEmpty
                message="There is no Transactions"
                // message2="Create your first Course now"
                // button={
                //   <Button
                //     primary
                //     onClick={() =>
                //       setCreationDrawer(prev => ({
                //         ...prev,
                //         show: true,
                //         status: 'ADD'
                //       }))
                //     }
                //   >
                //     Create Course
                //   </Button>
                // }
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
                accessor: 'Tanggal/Waktu',
                render: ({ createdAt }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {formatDate(createdAt)}
                  </Text>
                )
              },
              {
                accessor: 'Member Name',
                render: ({ member }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {member.name}
                  </Text>
                )
              },
              {
                accessor: 'Member Email',
                render: ({ member }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {member.email}
                  </Text>
                )
              },
              {
                accessor: 'Course Name',
                render: ({ course }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {course.title}
                  </Text>
                )
              },
              {
                accessor: 'Status',
                render: ({ status }) =>
                  status === STATUS_TRANSACTION.SUCCESS ? (
                    <Badges
                      variant="success"
                      text={STATUS_TRANSACTION.SUCCESS}
                      size="md"
                      border
                      LeftIcon={DotSuccess}
                    />
                  ) : status === STATUS_TRANSACTION.FAILED ? (
                    <Badges
                      variant="danger"
                      text={STATUS_TRANSACTION.FAILED}
                      size="md"
                      border
                      LeftIcon={Dot}
                    />
                  ) : (
                    <Badges
                      variant="info"
                      text={STATUS_TRANSACTION.PROCESS}
                      size="md"
                      border
                    />
                  )
              },
              {
                accessor: 'Terdaftar',
                render: ({ isRegistered }) =>
                  isRegistered ? (
                    <Badges
                      variant="success"
                      text="True"
                      size="md"
                      border
                      LeftIcon={DotSuccess}
                    />
                  ) : (
                    <Badges
                      variant="danger"
                      text="False"
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
      <TransactionCreationDrawer />
    </>
  );
}
