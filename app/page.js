import Link from 'next/link';

export default function Home(){
  return(
   <main>
      <h1 class="s1">Добро пожаловать!</h1>
      <p class= "s1">Это сайт 1001may.</p>
      <a href="/login" class= "s2">Войти</a>
    </main>
  );
}