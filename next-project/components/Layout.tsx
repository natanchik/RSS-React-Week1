import Search from './Search/Search';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Search />
      {children}
    </>
  );
}
