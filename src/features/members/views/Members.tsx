import HudoroTable from '@features/_global/components/TableMaster';
import { UIEmpty } from '@features/_global/components/UIEmpty';
import { PageLayout, Section, Text } from '@hudoro/admin';
import { useMembers } from '../hooks/useMembers';
import { formatDateWithoutTime } from '@core/libs/helpers';

export default function MembersView() {
  const { items, isLoading } = useMembers();

  return (
    <>
      <PageLayout title="Member" titleTag={`${items?.length}`}>
        <Section searchField>
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
                accessor: 'Tanggal Join',
                render: ({ user }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {formatDateWithoutTime(user.createdAt)}
                  </Text>
                )
              },
              {
                accessor: 'Nama',
                render: ({ name }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {name}
                  </Text>
                )
              },
              {
                accessor: 'Email',
                render: ({ email }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {email}
                  </Text>
                )
              },
              {
                accessor: 'Active Course',
                render: ({ activeCourse }) => (
                  <Text fontFamily="Poppins" fontSize="sm">
                    {activeCourse}
                  </Text>
                )
              }
            ]}
          />
        </Section>
      </PageLayout>
    </>
  );
}
