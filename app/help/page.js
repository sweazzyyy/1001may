// app/help/page.js
import Link from 'next/link';

export default function HelpPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-geist-sans)' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Помощь по сайту 1001may</h1>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#444' }}>Как сделать заказ?</h2>
        <ol style={{ lineHeight: 1.6, paddingLeft: '1.2rem' }}>
          <li>Выберите категорию в верхнем меню (например, «Вино» или «Виски»).</li>
          <li>Найдите интересующий товар и добавьте его в корзину.</li>
          <li>Перейдите в <Link href="/cart" style={{ color: '#0070f3', textDecoration: 'none' }}>корзину</Link> и оформите заказ.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#444' }}>Вход и регистрация</h2>
        <p>
          Чтобы сохранить заказы и видеть историю покупок, 
          <Link href="/registration" style={{ color: '#0070f3', textDecoration: 'none', marginLeft: '4px' }}>зарегистрируйтесь</Link> 
          или войдите в личный кабинет.
        </p>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#444' }}>Оплата и доставка</h2>
        <p>Оплата принимается банковскими картами. Доставка по России от 1 дня.</p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#444' }}>Поддержка</h2>
        <p>Напишите нам: <strong>sweaazyyy@gmail.com</strong></p>
      </section>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>← Вернуться на главную</Link>
      </div>
    </div>
  );
}