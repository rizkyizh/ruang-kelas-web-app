import { Badges, Icon, PageLayout, Section, Text } from '@hudoro/admin';
import { useMyTransaction } from '../hooks/useMyTransaction';
import HudoroTable from '@features/_global/components/TableMaster';
import { UIEmpty } from '@features/_global/components/UIEmpty';
import { formatDateWithoutTime } from '@core/libs/helpers';
import { STATUS_TRANSACTION } from '../helper';

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

export default function MyTransactionView() {
  const { items, isLoading } = useMyTransaction();

  return (
    <>
      <PageLayout title="My Transaction" titleTag={`${items?.length}`}>
        <Section headerProps={{ borderBottom: false }}>
          <HudoroTable
            records={items}
            isLoading={isLoading}
            emptyState={<UIEmpty message="Data empty element" />}
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
                accessor: 'Tanggal',
                render: ({ createdAt }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {formatDateWithoutTime(createdAt)}
                  </Text>
                )
              },
              // {
              //   accessor: 'Nama',
              //   render: ({ member }) => (
              //     <Text fontFamily="Poppins" fontSize="sm">
              //       {member.name}
              //     </Text>
              //   )
              // },
              {
                accessor: 'Course',
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
              }
            ]}
          />
        </Section>
      </PageLayout>
    </>
  );
}
