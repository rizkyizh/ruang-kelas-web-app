import { Box, Button, Flex, Section, Text } from '@hudoro/admin';
import defaultImg from '@core/assets/svg/preview_img_default.svg';
import MarkdownRenderer from '@features/_global/components/MarkdownRenderer';
import { CourseModel } from '@core/models/course';

const markdownTemplate = `
# Judul Besar

## Judul Sedang

### Judul Kecil

Ini adalah paragraf dengan beberapa teks. Anda bisa menggunakan *italic* atau **bold** untuk penekanan. Anda juga bisa menggunakan \`inline code\` untuk menyoroti kode dalam teks.

---

## Daftar

### Daftar Tidak Berurut

- Item 1
  - Sub-item 1
  - Sub-item 2
- Item 2
- Item 3

### Daftar Berurut

1. Item Pertama
2. Item Kedua
3. Item Ketiga

---

## Link

[OpenAI](https://www.openai.com)

---

## Gambar

![Alt Text](https://www.example.com/image.jpg)

---

## Blok Kode

\`\`\`javascript
function helloWorld() {
  console.log("Hello, World!");
}
\`\`\`

\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`

---

## Tabel

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |
| Row 3    | Data 5   | Data 6   |

---

## Kutipan

> Ini adalah sebuah kutipan.

---

## Daftar Tugas

- [x] Tugas 1
- [ ] Tugas 2
- [ ] Tugas 3

---

## Garis Pembatas

---

## Footnote

Ini adalah teks dengan footnote [^1].

[^1]: Ini adalah footnote.

---

## Emoji

Anda bisa menggunakan emoji :smile: :thumbsup: :tada:.

---

## HTML

<p>Anda juga bisa menggunakan <strong>HTML</strong> di dalam Markdown.</p>

---

## Detail/Summary

<details>
  <summary>Detail Klik untuk Melihat</summary>
  Ini adalah detail tersembunyi.
</details>
`;

interface IDetailCourse {
  data: CourseModel;
}
export function DetailCourse(props: IDetailCourse) {
  return (
    <Box customWidth={'2000px'}>
      <Section title={props.data.title}>
        <Box direction="row" gap="md">
          <Box
            style={{
              width: '50%',
              height: '162px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <img
              src={props.data.thumbnail || defaultImg}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <Box
            gap="md"
            direction="column"
            width="width-1-2"
            justify="space-evenly"
          >
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                Trainer
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.instructor}
              </Text>
            </Box>
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                Course Fee
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.price}
              </Text>
            </Box>
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                Period
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.periode} Bulan
              </Text>
            </Box>
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                Start Date
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.start}
              </Text>
            </Box>
            <Box justify="space-between" direction="row">
              <Text fontSize="sm" fontWeight="semibold">
                End Date
              </Text>
              <Text fontSize="sm" fontWeight="normal">
                {props.data.end}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box gap="md" marginTop="md">
          <Box direction="column">
            <Text fontSize="sm" fontWeight="semibold">
              Description
            </Text>
            <MarkdownRenderer markdown={props.data.description} />
          </Box>
        </Box>
      </Section>
    </Box>
  );
}
