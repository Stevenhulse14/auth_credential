import bcrypt from "bcrypt";
import { PrismaClient, User } from "@prisma/client";
import { NextResponse } from "next/server";

//initialize prisma client and create the adaptor that feeds in the prisma client
const prisma = new PrismaClient();

type Data = {
  name: string;
  email: string;
  password?: string;
};

export async function POST(req: Request, res: NextResponse) {
  try {
    const { name, email, password } = await req.json();
    //console.log(data);

    if (!name || !email || !password) {
      return new NextResponse("Missing fields", { status: 400 });
    }
    // check if username already exists
    const userExist = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userExist) {
      return new NextResponse("User already exists", { status: 400 });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user: User = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      return new NextResponse("User created", { status: 200 });
    }
  } catch (error) {
    console.error(error);
  }
}
