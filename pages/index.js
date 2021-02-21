import React from 'react';
import BaseLayout from 'layouts/BaseLayout';
import MainPage from 'pages/MainPage';

export default function Home() {
  return (
    <BaseLayout title="Лабораторные задачи">
      <MainPage />
    </BaseLayout>
  );
}
