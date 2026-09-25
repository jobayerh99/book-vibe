'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    BarShapeProps,
    LabelList,
    Label,
    LabelProps,
    Tooltip,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];


const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    function getPath(arg0: number, arg1: number, arg2: number, arg3: number): string | undefined {
        return `M ${arg0},${arg1 + arg3} L ${arg0 + arg2 / 2},${arg1} L ${arg0 + arg2},${arg1 + arg3} Z`;
    }

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
            style={{
                transition: 'stroke-width 0.3s ease-out',
            }}
        />
    );
};

const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {

    const {readBooks} = useContext(BooksContext)

    const data = readBooks.map((book: IBook, index: number) => {
        return {
            name: book.bookName,
            uv: book.totalPages,
            pv: index + 1,
            amt: index + 1,
        };
    });

    return (
        <div className='container mx-auto my-5'>
            {readBooks.length > 0 ?<BarChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid />
                <Tooltip cursor={{ fillOpacity: 0.5 }} />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Bar dataKey="uv" shape={TriangleBar} activeBar>
                    <LabelList content={CustomColorLabel} position="top" />
                </Bar>
                {/* <RechartsDevtools /> */}
            </BarChart> 
            : <p className='font-bold text-4xl text-center'>No Read Books to Display</p>
            }
        </div>
    );
};

export default ReadBooks;