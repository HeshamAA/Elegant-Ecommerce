import { useState, useAdmin, User,Card, CardContent, Button, Badge, Trash2, Modal  } from "@/features/Admin";


const UsersTab: React.FC = () => {
  const { users, usersLoading, handleDeleteUser } = useAdmin();
  const safeUsers = Array.isArray(users) ? users : [];

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);


  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Users Management</h2>
      <div className="grid gap-4">
        {usersLoading ? (
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-muted animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-[200px] bg-muted animate-pulse rounded" />
                  <div className="h-4 w-[150px] bg-muted animate-pulse rounded" />
                </div>
              </div>
            </CardContent>
          </Card>
        ) : safeUsers.length > 0 ? (
          safeUsers.map((user: User) => (
            <Card key={user.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                    <Badge
                      variant={user.role === "admin" ? "default" : "secondary"}
                    >
                      {user.role}
                    </Badge>
                  </div>
                  {user.role !== "admin" && (
                  <div className="flex gap-2">
                   
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        setUserToDelete(user.id);
                        setDeleteModalOpen(true);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-4 text-center text-muted-foreground">
              No users found
            </CardContent>
          </Card>
        )}
      </div>
      <Modal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={() => {
          if (userToDelete) {
            handleDeleteUser(userToDelete.toString());
            setDeleteModalOpen(false);
          }
        }}
      />
    </div>
  );
};

export default UsersTab;
