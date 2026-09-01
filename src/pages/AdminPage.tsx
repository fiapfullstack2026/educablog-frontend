import { Link } from "react-router-dom";
import { PostTable } from "@/features/admin/components/PostTable";
import { useAdmin } from "@/features/admin/hooks/useAdmin";
import { Button } from "@/components/Button/Button";
import { Feedback } from "@/components/Feedback/Feedback";
import { IconCirclePlus } from '@tabler/icons-react';

export const AdminPage = () => {
  const { posts, loading, error, remove } = useAdmin();

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir este post?",
    );
    if (!confirmed) return;

    try {
      await remove(id);
    } catch {
      window.alert("Não foi possível excluir o post.");
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-medium text-text-primary">Administração</h1>
        <Link to="/posts/new">
          <Button variant="primary"><IconCirclePlus stroke={2} /> Criar Post</Button>
        </Link>
      </div>

      {error && (
        <div className="mb-4">
          <Feedback variant="error">{error}</Feedback>
        </div>
      )}

      {loading ? (
        <div className="rounded-card border-hair border-green-light bg-white p-8 text-center text-text-secondary">
          Carregando posts...
        </div>
      ) : (
        <PostTable posts={posts} onDelete={handleDelete} />
      )}
    </div>
  );
};
