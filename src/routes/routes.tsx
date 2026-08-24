import { Routes, Route } from "react-router-dom";

import { Layout } from "@/components/Layout/Layout";
import { ProtectedRoute } from "@/components/ProtectedRoute/ProtectedRoute";

import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { CreatePostPage } from "@/pages/CreatePostPage";
import { EditPostPage } from "@/pages/EditPostPage";
import { AdminPage } from "@/pages/AdminPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { PostPage } from "@/pages/PostPage";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />

    <Route path="/login" element={<LoginPage />} />

    <Route path="/register" element={<RegisterPage />} />

    <Route
      path="/home"
      element={
        <Layout>
          <HomePage />
        </Layout>
      }
    />

    <Route
      path="/posts/new"
      element={
        <ProtectedRoute requireTeacher>
          <Layout>
            <CreatePostPage />
          </Layout>
        </ProtectedRoute>
      }
    />

    <Route
      path="/posts/:id"
      element={
        <Layout>
          <PostPage />
        </Layout>
      }
    />

    <Route
      path="/posts/:id/edit"
      element={
        <ProtectedRoute requireTeacher>
          <Layout>
            <EditPostPage />
          </Layout>
        </ProtectedRoute>
      }
    />

    <Route
      path="/admin"
      element={
        <ProtectedRoute requireTeacher>
          <Layout>
            <AdminPage />
          </Layout>
        </ProtectedRoute>
      }
    />
  </Routes>
);
