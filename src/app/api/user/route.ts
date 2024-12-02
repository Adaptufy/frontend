import { User } from '@/types';
import { NextResponse } from 'next/server';

const DEFAULT_USER: User = {
  id: 1,
  name: 'John Doe',
};

export async function GET() {
  return NextResponse.json(DEFAULT_USER);
}
