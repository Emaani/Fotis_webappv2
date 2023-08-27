import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

type PropsType = {
    items: { text: string; link: string }[];
};
export default function BreadCrumb({ items }:PropsType) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        {index > 0 && (
                            <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        )}
                        <Link
                            href={item.link}
                            className={`inline-flex items-center text-sm font-medium ${index >0&& 'ml-1'} ${index === items.length - 1 ? 'text-gray-500 ' : 'text-gray-700 hover:text-teal-600' }  `}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
