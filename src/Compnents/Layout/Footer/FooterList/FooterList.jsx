import React from 'react';
import './FooterList.css';

const FooterList = () => {
  return (
    <div className='list'>
      <p className='title'>أهم الروابط</p>
      <ul>
        <li><a href='#'>الأسئلة الشائعة</a></li>
        <li><a href='#'>الحسابات البنكية للجمعية</a></li>
        <li><a href='#'>طرق التبرع</a></li>
        <li><a href='#'>حساباتنا في البنوك</a></li>
        <li><a href='#'>أخبارنا</a></li>
        <li><a href='#'>فروعنا</a></li>
      </ul>
    </div>
  );
}

export default FooterList;
