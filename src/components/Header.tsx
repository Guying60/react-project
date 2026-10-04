import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
    return (
        <header style={{ height: '50px',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      background: '#ffffff' }}>
            <h1 style={{ fontSize: '18px', fontWeight: 600 }}>{title}</h1>
            <div>
                <button style={{ marginRight: '8px', padding: '6px 12px' }}>撤销</button>
                <button style={{ padding: '6px 12px' }}>导出图片</button>
            </div>
        </header>
    )
}