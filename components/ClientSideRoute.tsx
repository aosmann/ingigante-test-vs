'use client';
import Link from 'next/link';
import React from 'react';

//good example of HOC, higher order component.
function ClientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return <Link href={route}>{children}</Link>;
}

export default ClientSideRoute;
