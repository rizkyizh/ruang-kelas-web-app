import { useProfile, useUserCurrentRole } from '@features/_global/hooks';
import { Box, Button, PageLayout, Text, Flex, Badges } from '@hudoro/admin';
import { StatsCard } from '../components/StatsCard';
import { useNavigate } from 'react-router-dom';
import { Section } from '@features/_global/components/Section';
import HudoroTable from '@features/_global/components/TableMaster';
import { UIEmpty } from '@features/_global/components/UIEmpty';
import { STATUS_TRANSACTION } from '@features/my-transaction/helper';
import { Dot, DotSuccess } from '@features/transactions/views/Transactions';
import { useTransactions } from '@features/transactions/hooks/useTransactions';
import { useCourses } from '@features/courses/hooks/useCourses';
import { useMembers } from '@features/members/hooks/useMembers';
import { autorities } from '@features/_global/types';

export default function DashboardMenuView() {
  const { items, isLoading } = useTransactions();
  const { items: courseItems, isLoading: courseLoading } = useCourses();
  const { items: memberItems, isLoading: loadingMembers } = useMembers();
  const { isLoading: loading, data } = useProfile();
  const navigate = useNavigate();

  const { role } = useUserCurrentRole();
  return (
    <PageLayout title={loading ? 'Loading...' : `Hello, ${data?.sub}`}>
      {role === autorities.ROLE_ADMIN && (
        <Box gap="lg">
          <Box direction="row" justify="space-between" gap="lg">
            <StatsCard
              icon={{ name: 'UserMore' }}
              label="Members"
              value={
                loadingMembers ? 'Loading...' : `${memberItems?.length || 0}`
              }
              to="/dashboard/members"
            />
            <StatsCard
              icon={{ name: 'DocumentFilled' }}
              label="Courses"
              value={
                courseLoading ? 'Loading...' : `${courseItems?.length || 0}`
              }
              to="/dashboard/courses"
            />
            <StatsCard
              icon={{ name: 'Money' }}
              label="Transactions"
              value={
                isLoading ? 'Loading...' : `${items?.length.toString() || 0}`
              }
              to="/dashboard/transaction"
            />
          </Box>

          <Flex direction="row" gap="lg">
            <Section
              headerProps={{
                borderBottom: false
              }}
              width="width-full"
              header={
                <Box
                  direction="row"
                  gap="lg"
                  align="center"
                  justify="space-between"
                >
                  <Text fontWeight="medium">Recent Transactions</Text>
                  <Button
                    onClick={() => {
                      navigate('/dashboard/transaction');
                    }}
                  >
                    View All
                  </Button>
                </Box>
              }
            >
              <HudoroTable
                records={items?.filter((_, i) => i < 5)}
                isLoading={isLoading}
                emptyState={<UIEmpty message="There is no Transactions" />}
                columns={[
                  {
                    accessor: 'Member Email',
                    render: ({ member }) => (
                      <Text fontFamily="Poppins" fontSize="sm">
                        {member.email}
                      </Text>
                    ),
                    customWidth: '305px'
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
                      ),
                    customWidth: '160px'
                  }
                ]}
              />
            </Section>

            <Section
              width="width-1-3"
              header={
                <Box>
                  <Text fontWeight="medium">Recent New Members</Text>
                </Box>
              }
            >
              <HudoroTable
                records={memberItems?.filter((_, i) => i < 5)}
                isLoading={loadingMembers}
                emptyState={<UIEmpty message="Data empty element" />}
                columns={[
                  {
                    accessor: 'Nama',
                    render: ({ name }) => (
                      <Text fontFamily="Poppins" fontSize="sm">
                        {name}
                      </Text>
                    )
                  }
                ]}
              />
            </Section>
          </Flex>
        </Box>
      )}
    </PageLayout>
  );
}
