import React from 'react';

const SvgCompany = props => (
  <svg width={50} height={50} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#C4C4C4" d="M0 49.932h49.999V0H0z" />
      <path
        d="M36.238 49.241c.06-.202.228-.328.454-.337l1.325-.052c.024 0 .047-.004.088-.007.003-.083.007-.165.008-.247.001-.079 0-.158 0-.255-.095-.008-.182-.017-.269-.022a.329.329 0 01-.32-.354c.005-.17.108-.28.278-.296.052-.005.104-.004.156-.007l.167-.009c.003-.065.01-.124.01-.184v-4.6V40.7c0-.04.012-.082.02-.123.002-.016.014-.039.007-.049-.052-.073-.027-.156-.027-.233v-6.392c0-.054.016-.109.025-.163.002-.013.011-.03.005-.037-.063-.086-.03-.183-.03-.274v-6.8c0-.045 0-.079-.04-.112-.087-.07-.1-.164-.064-.267.04-.113.13-.155.24-.165.045-.004.092 0 .136 0 .032-.156.026-.428 0-.503-.09-.025-.177-.032-.243-.07-.083-.052-.114-.149-.13-.243a2.37 2.37 0 01-.025-.238c-.038-.533-.26-.966-.732-1.23a.443.443 0 01-.122-.7c.01-.01.015-.025.03-.049-.042-.007-.075-.013-.11-.017-.158-.02-.317-.034-.475-.06-.233-.042-.416-.28-.416-.569 0-.24.125-.476.234-.556h.002c.024-.355.245-.665.62-.734.032-.006.064-.009.071-.01.071-.088.122-.165.19-.226a.196.196 0 01.142-.046c.11.016.175-.04.245-.108a3.196 3.196 0 001.006-2.014 3.016 3.016 0 00-.208-1.522c-.455-1.087-1.265-1.755-2.422-1.986-.21-.04-.43-.04-.644-.052-.043-.003-.099.01-.129.036-.137.124-.279.12-.432.03-.039.024-.078.05-.118.073a.815.815 0 01-.99-1.285c.023-.023.05-.043.073-.066a.143.143 0 00.05-.148c-.035-.186.041-.317.218-.37.082-.025.11-.079.136-.145.464-1.118.37-2.188-.328-3.176-.627-.889-1.514-1.329-2.599-1.352a3.077 3.077 0 00-1.406.315c-.063.03-.1.064-.116.14-.029.151-.137.23-.29.24h-.097a.827.827 0 01-.615.391.793.793 0 01-.572-.152c-.364-.265-.425-.694-.168-1.17-.19-.277-.148-.464.133-.583.141-.885-.209-2.207-1.386-3.007a3.21 3.21 0 00-3.587-.012c-1.094.731-1.552 1.977-1.409 3.011.308.071.392.355.167.591.044.112.1.216.128.328a.802.802 0 01-.424.912.81.81 0 01-.987-.2c-.056-.067-.105-.115-.205-.117-.128-.002-.22-.103-.25-.232-.005-.027-.007-.055-.01-.086a2.976 2.976 0 00-.974-.327c-.976-.146-1.85.091-2.605.728a3.117 3.117 0 00-1.1 1.977 3.157 3.157 0 00.253 1.807.188.188 0 00.125.117c.16.051.244.157.22.316-.02.13.035.203.112.283a.786.786 0 01.207.794.812.812 0 01-1.2.483c-.036-.02-.07-.044-.11-.068l-.105.04c-.102.036-.202.023-.277-.048-.072-.067-.148-.072-.233-.072a3.192 3.192 0 00-2.346 1.004 3.123 3.123 0 00-.518.72 3.143 3.143 0 00-.323 2.051c.124.73.472 1.343 1.021 1.841.035.032.088.066.131.065.193-.006.314.08.367.27.032.005.063.011.094.018.376.082.556.38.578.735.155.041.29.304.286.531-.004.314-.158.528-.454.597-.173.04-.352.05-.54.074l.062.086c.162.23.107.496-.134.64-.458.274-.704.678-.749 1.207-.008.085-.01.17-.024.253-.038.24-.138.325-.37.324-.034.094-.039.36-.009.515l.123.005c.11.006.21.043.247.154.037.106.031.212-.07.294-.024.02-.033.061-.043.094-.006.021 0 .046 0 .07 0 2.286 0 4.571-.002 6.857 0 .062-.03.124-.03.186 0 .063.03.127.03.19.001 2.15 0 4.3.006 6.448 0 .075-.067.128-.03.211.026.06.024.136.024.206l.001 6.66v.197l.202.014c.037.003.075.003.112.005.203.011.317.128.317.32a.335.335 0 01-.318.331l-.262.02v.504c.046.003.092.008.137.01.428.016.855.031 1.283.051.367.017.628.28.45.611-.106.2-.31.403-.545.415-.068.004-.317-.003-.678 0H37.25c-.249-.003-.428.005-.504 0-.364-.025-.61-.34-.508-.69"
        fill="#D5D5D5"
      />
      <path
        d="M43.76 49.188a.47.47 0 00-.436-.284c-.4-.018-.798-.033-1.198-.05l-.178-.007v-.507c.083-.007.158-.015.232-.02.197-.012.334-.148.332-.33-.002-.193-.124-.312-.334-.324-.061-.003-.122-.002-.184-.005-.035-.003-.07-.01-.113-.018v-4.268l-.001-2.612c0-.072-.016-.144-.026-.223.01-.07.026-.138.026-.205 0-2.13.002-4.26 0-6.392 0-.068-.023-.135-.034-.204-.003-.016 0-.033.002-.05.01-.063.032-.126.032-.189.002-2.257 0-4.515 0-6.772 0-.029.003-.057 0-.085-.003-.05.008-.088.053-.12.087-.062.107-.15.079-.25-.032-.113-.114-.17-.225-.188-.05-.007-.101-.006-.15-.008-.032-.179-.024-.425.015-.516.214.006.299-.057.354-.273.017-.067.022-.139.026-.209.032-.57.27-1.02.777-1.308.196-.11.276-.362.137-.6-.023-.039-.052-.074-.09-.129.097-.005.176-.008.254-.014.14-.009.282-.023.41-.088.15-.076.262-.185.286-.359a.611.611 0 00-.487-.676c-.083-.014-.168-.019-.252-.027a7.156 7.156 0 01-.14-.01v-.184c.004-.48-.21-.897-.4-1.265-.117-.227-.238-.46-.253-.623a16.745 16.745 0 00-.754-3.558l-.06-.189a1.365 1.365 0 00-.08-.194l-.014-.029a1.46 1.46 0 00-.053-.198 16.341 16.341 0 00-.804-1.86 20.218 20.218 0 00-1.392-2.367c-.251-.37-.524-.746-.811-1.117a25.063 25.063 0 00-2-2.274 31.831 31.831 0 00-1.485-1.386 29.747 29.747 0 00-1.58-1.282 36.78 36.78 0 00-1.647-1.17 30.457 30.457 0 00-2.843-1.706c-.742-.39-1.501-.778-2.234-1.15a311.01 311.01 0 01-.998-.51 1.121 1.121 0 00-.52-.129c-.176 0-.35.043-.517.128l-.565.286c-.47.24-.94.477-1.41.714a38.686 38.686 0 00-4.017 2.31c-.086.057-.166.118-.237.172-.054.041-.106.081-.154.113a3.933 3.933 0 01-.162.102 4.083 4.083 0 00-.264.17c-.312.222-.645.462-.974.712a29.363 29.363 0 00-2.776 2.395 25.479 25.479 0 00-2.381 2.7c-1.131 1.49-2.028 3.056-2.666 4.657l-.044.11a3.977 3.977 0 00-.232.698c-.005.017-.026.062-.04.095-.03.063-.066.141-.095.232a16.445 16.445 0 00-.774 3.938c-.007.09-.131.297-.221.45-.183.303-.39.65-.404 1.07l-.003.055-.002.085c-.112.01-.221.018-.33.03a.6.6 0 00-.515.421c-.09.291.023.517.306.638.129.054.264.061.399.072.069.006.137.01.222.013l-.042.065c-.2.265-.152.512.133.686.382.234.618.572.698 1.012.027.148.03.3.053.447.013.1.046.202.132.256.066.04.153.047.259.076.005.147.006.316-.002.492-.062.003-.114.001-.165.01-.098.015-.18.062-.213.161-.035.1-.03.2.063.268.059.044.043.1.043.152 0 2.244 0 4.487.002 6.731 0 .101-.032.207.033.302.005.008-.003.024-.005.037-.01.068-.028.137-.03.204 0 2.117 0 4.233.002 6.35 0 .077.02.155.03.232.002.013.006.03 0 .038-.054.072-.031.154-.031.232l-.001 6.688v.172c-.117.005-.216.008-.314.014a.307.307 0 00-.276.188.331.331 0 00.28.463l.272.023v.254l-.006.257c-.064 0-.11-.002-.157 0-.414.017-.828.031-1.242.052a.49.49 0 00-.46.39c-.084.341.209.62.517.636.383.021 4.226.011 5.83 0 .36-.003.61.004.679 0 .233-.013.438-.217.545-.415.178-.33-.083-.594-.45-.61-.428-.02-.856-.036-1.284-.053-.045 0-.09-.006-.136-.01v-.504l.26-.02a.333.333 0 00.32-.33c0-.193-.115-.309-.318-.32-.037-.002-.075-.002-.112-.005l-.201-.014v-.198l-.001-6.66c0-.069.002-.145-.025-.206-.037-.082.03-.135.03-.21-.005-2.149-.004-4.298-.006-6.448 0-.064-.03-.127-.03-.19s.03-.124.03-.186c.002-2.286.002-4.572.002-6.858 0-.023-.005-.048 0-.069.01-.034.019-.075.044-.095.1-.082.106-.187.069-.294-.038-.11-.137-.147-.247-.153l-.123-.005c-.03-.156-.024-.42.009-.515.232.001.333-.085.37-.324.015-.084.017-.169.024-.253.045-.529.29-.934.749-1.207.242-.144.296-.41.134-.64a10.85 10.85 0 01-.061-.086c.187-.026.367-.034.54-.074.296-.069.45-.283.454-.598.003-.226-.131-.489-.286-.53-.023-.355-.202-.653-.578-.736l-.094-.018c-.054-.19-.174-.275-.367-.269-.043.001-.096-.033-.131-.065a3.146 3.146 0 01-1.022-1.842 3.142 3.142 0 01.324-2.05c.139-.264.309-.507.517-.72a3.196 3.196 0 012.347-1.004c.085 0 .16.005.232.072.075.071.176.083.278.047l.105-.039c.038.023.073.047.109.068a.812.812 0 001.2-.483.788.788 0 00-.206-.794c-.078-.08-.133-.155-.113-.283.025-.159-.06-.265-.22-.316-.066-.02-.098-.058-.124-.118a3.152 3.152 0 01-.253-1.806 3.12 3.12 0 011.099-1.977c.755-.637 1.629-.874 2.606-.728.34.051.665.162.972.327.004.031.006.06.012.086.028.13.12.23.249.232.1.002.149.05.205.117a.811.811 0 00.987.2.802.802 0 00.424-.912c-.027-.112-.084-.216-.128-.328.226-.237.142-.52-.167-.59-.142-1.035.316-2.28 1.41-3.012a3.206 3.206 0 013.586.012c1.177.8 1.528 2.122 1.386 3.007-.28.12-.323.306-.133.583-.256.475-.196.905.168 1.17a.8.8 0 00.573.152.83.83 0 00.615-.392h.096c.154-.009.26-.088.29-.239.016-.077.053-.11.117-.14a3.073 3.073 0 011.405-.315c1.086.023 1.973.463 2.6 1.352.697.987.792 2.058.328 3.176-.028.065-.055.12-.137.144-.177.054-.253.185-.218.371.013.067-.006.107-.05.148-.023.022-.05.042-.073.065a.816.816 0 00.99 1.286l.119-.074c.153.09.295.095.43-.029a.198.198 0 01.13-.037c.215.013.435.012.645.053 1.157.231 1.967.9 2.422 1.985.203.486.266.997.208 1.522a3.199 3.199 0 01-1.006 2.015c-.071.067-.136.124-.245.108a.202.202 0 00-.144.045c-.066.062-.117.14-.188.227a.486.486 0 00-.072.01c-.375.07-.595.38-.62.734h-.002c-.108.08-.233.316-.233.555 0 .29.182.528.416.57.157.026.316.04.474.06.036.004.069.01.11.016-.015.025-.02.038-.03.05a.44.44 0 00.123.7c.47.263.694.697.732 1.23.005.08.012.16.024.238.017.093.047.191.13.241.067.04.154.047.243.072.027.074.033.346 0 .503-.043 0-.09-.004-.136 0-.111.01-.2.051-.24.165-.036.103-.023.196.065.267.039.032.04.067.04.11-.001 2.268-.002 4.535 0 6.801 0 .092-.033.19.029.275.006.007-.003.024-.005.037-.008.054-.024.11-.024.163a3403.74 3403.74 0 000 6.391c0 .078-.025.161.026.234.007.01-.005.033-.007.05-.007.04-.02.081-.02.121v2.173l-.001 4.6c0 .06-.006.118-.01.183-.064.004-.115.008-.166.01-.051.003-.103.002-.155.007-.171.016-.273.125-.278.296a.328.328 0 00.32.353c.087.006.174.014.269.023v.255c-.001.082-.005.164-.008.247l-.088.007-1.325.052c-.227.01-.395.135-.454.337-.102.35.143.665.507.69.077.005.255-.003.504 0 .483.006 1.227 0 1.99 0 1.313 0 3.82.01 4.015 0 .198-.01.35.16.46 0 .118-.169.13-.56.046-.743"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgCompany;