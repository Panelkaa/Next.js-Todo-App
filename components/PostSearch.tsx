'use client'

import { getPostsBySearch } from "@/services/getPost";
import { FormEventHandler, useState } from "react";

type PostSearchProps = {
    onSearch: (value: any[]) => void
}

export default function PostSearch({onSearch}: PostSearchProps) {
  const [search, setSearch] = useState('');

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search)
    onSearch(posts);
  }
  return (
    <h1>
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="search" value={search} onChange={e => setSearch(e.target.value)}/>
            <button type="submit"> Search </button>
        </form>
    </h1>
  )
}
