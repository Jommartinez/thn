import { useState, useEffect } from 'react'

const useFetch = (url) => {
	const [result, setResult] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		;(async () => {
			try {
				const res = await fetch(url)
				const json = await res.json()
				setResult(json)
			} catch (err) {
				setError(err)
			}
		})()
	}, [url])

	return { result, error }
}
export default useFetch
