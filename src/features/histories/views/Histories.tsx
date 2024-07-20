import { Badges, Icon, PageLayout, Section, Text } from '@hudoro/admin';
import HudoroTable from '@features/_global/components/TableMaster';
import { UIEmpty } from '@features/_global/components/UIEmpty';
import { STATUS_TRANSACTION } from '@features/my-transaction/helper';
import { formatDate } from '@features/_global/helper';
import { useHistories } from '../hooks/useHistories';

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

export default function HistoriesView() {
  const { items, isLoading } = useHistories();

  return (
    <>
      <PageLayout title="Histories" titleTag={`${items?.length}`}>
        <Section headerProps={{ borderBottom: false }}>
          <HudoroTable
            records={items}
            isLoading={isLoading}
            emptyState={<UIEmpty message="Data empty element" />}
            columns={[
              {
                accessor: 'Tanggal/Waktu',
                render: ({ date }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {formatDate(date)}
                  </Text>
                )
              },
              {
                accessor: 'Member Name',
                render: ({ transaction }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {transaction.member.name}
                  </Text>
                )
              },

              {
                accessor: 'Status Transaction',
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
                accessor: 'Course',
                render: ({ transaction }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {transaction.course.title}
                  </Text>
                )
              },
              {
                accessor: 'Status Terdaftar',
                render: ({ transaction }) =>
                  transaction.isRegistered ? (
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
    </>
  );
}
