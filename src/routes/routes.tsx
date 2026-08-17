import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout/Layout'
import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute'
import { HomePage }       from '@/pages/HomePage'
import { PostPage }       from '@/pages/PostPage'
import { LoginPage }      from '@/pages/LoginPage'
import { CreatePostPage } from '@/pages/CreatePostPage'
import { EditPostPage }   from '@/pages/EditPostPage'
import { AdminPage }      from '@/pages/AdminPage'

export const AppRoutes = () => (
  <Routes>
    {/* Rotas públicas */}
    <Route path="/" element={<Layout><HomePage /></Layout>} />
    <Route path="/posts/:id" element={<Layout><PostPage /></Layout>} />
    <Route path="/login" element={<Layout><LoginPage /></Layout>} />

    {/* Rotas protegidas — somente professores autenticados */}
    <Route
      path="/posts/new"
      element={
        <ProtectedRoute requireTeacher>
          <Layout><CreatePostPage /></Layout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/posts/:id/edit"
      element={
        <ProtectedRoute requireTeacher>
          <Layout><EditPostPage /></Layout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin"
      element={
        <ProtectedRoute requireTeacher>
          <Layout><AdminPage /></Layout>
        </ProtectedRoute>
      }
    />
  </Routes>
)
