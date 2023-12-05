import Link from "next/link"
import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href="/about">About</Link>
    </main>
  )
}
