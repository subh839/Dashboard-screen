import TypeIconOpenFalse from "./type-icon-open-false";
import Property1Language from "./property1-language";
import Property1LangPair from "./property1-lang-pair";
import FormContainer from "./form-container";
import styles from "../styles/top-employee-language-pair-contain.module.css";
const TopEmployeeLanguagePairContain = () => {
  return (
    <div className={styles.topEmployeeAndLangPair}>
      <div className={styles.topLangPairs}>
        <div className={styles.sectionHeader}>
          <div className={styles.content}>
            <div className={styles.textAndSupportingText}>
              <div className={styles.text}>Top 5 languages</div>
            </div>
            <TypeIconOpenFalse
              dotsVertical="/dotsvertical2.svg"
              typeIconOpenFalsePosition="unset"
            />
          </div>
        </div>
        <div className={styles.horizontalTabs}>
          <div className={styles.tabButtonBase}>
            <div className={styles.text1}>Transaltion</div>
          </div>
          <div className={styles.tabButtonBase1}>
            <div className={styles.text1}>Transcription</div>
          </div>
          <div className={styles.tabButtonBase}>
            <div className={styles.text1}>Subtitling</div>
          </div>
          <div className={styles.tabButtonBase3}>
            <div className={styles.text1}>Proofreading</div>
          </div>
        </div>
        <div className={styles.pieChart}>
          <div className={styles.pieChart1}>
            <div className={styles.background} />
            <div className={styles.series1} />
            <div className={styles.series2} />
            <div className={styles.series3} />
            <div className={styles.series4} />
            <div className={styles.div}>37%</div>
            <div className={styles.div1}>22%</div>
            <div className={styles.div2}>18%</div>
            <div className={styles.div3}>07%</div>
            <div className={styles.div4}>06%</div>
          </div>
          <div className={styles.legend}>
            <div className={styles.legendSeries}>
              <div className={styles.colorParent}>
                <div className={styles.color} />
                <Property1Language
                  translate02="/translate02.svg"
                  text="English"
                  property1LanguagePosition="unset"
                />
              </div>
              <div className={styles.div5}>$2500</div>
            </div>
            <div className={styles.legendSeries}>
              <div className={styles.colorParent}>
                <div className={styles.color1} />
                <Property1LangPair
                  translate02="/translate02.svg"
                  text="Persian"
                  showText={false}
                  textVisible={false}
                  property1LangPairPosition="unset"
                />
              </div>
              <div className={styles.div5}>$2500</div>
            </div>
            <div className={styles.legendSeries}>
              <div className={styles.colorParent}>
                <div className={styles.color2} />
                <Property1Language
                  translate02="/translate02.svg"
                  text="Spanish"
                  property1LanguagePosition="unset"
                />
              </div>
              <div className={styles.div5}>$2500</div>
            </div>
            <div className={styles.legendSeries}>
              <div className={styles.colorParent}>
                <div className={styles.color3} />
                <Property1Language
                  translate02="/translate02.svg"
                  text="Norwegian"
                  property1LanguagePosition="unset"
                />
              </div>
              <div className={styles.div5}>$2500</div>
            </div>
            <div className={styles.legendSeries}>
              <div className={styles.colorParent}>
                <div className={styles.color4} />
                <Property1LangPair
                  translate02="/translate02.svg"
                  text="Japanese"
                  showText={false}
                  textVisible={false}
                  property1LangPairPosition="unset"
                />
              </div>
              <div className={styles.div5}>$2500</div>
            </div>
            <div className={styles.legendSeries}>
              <div className={styles.colorParent}>
                <div className={styles.color4} />
                <Property1LangPair
                  translate02="/translate02.svg"
                  text="Others"
                  showText={false}
                  textVisible={false}
                  property1LangPairPosition="unset"
                />
              </div>
              <div className={styles.div5}>$2500</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topEmployee}>
        <div className={styles.header}>
          <div className={styles.text5}>Top 10 agencies</div>
          <TypeIconOpenFalse
            dotsVertical="/dotsvertical3.svg"
            typeIconOpenFalsePosition="unset"
          />
        </div>
        <div className={styles.horizontalTabs1}>
          <div className={styles.tabButtonBase}>
            <div className={styles.text1}>Transaltion</div>
          </div>
          <div className={styles.tabButtonBase5}>
            <div className={styles.text1}>Transcription</div>
          </div>
          <div className={styles.tabButtonBase}>
            <div className={styles.text1}>Subtitling</div>
          </div>
          <div className={styles.tabButtonBase7}>
            <div className={styles.text1}>Proofreading</div>
          </div>
          <div className={styles.tabButtonBase8}>
            <div className={styles.text1}>QC</div>
          </div>
        </div>
        <div className={styles.content1}>
          <FormContainer productCode="/avatar1@2x.png" price="$320" />
          <FormContainer
            productCode="/avatar2@2x.png"
            price="$280"
            propBorderBottom="1px solid var(--gray-200)"
            propBorderBottom1="1px solid var(--gray-200)"
          />
          <FormContainer
            productCode="/avatar3@2x.png"
            price="$200"
            propBorderBottom="1px solid var(--gray-200)"
            propBorderBottom1="1px solid var(--gray-200)"
          />
          <FormContainer
            productCode="/avatar2@2x.png"
            price="$189"
            propBorderBottom="1px solid var(--gray-200)"
            propBorderBottom1="1px solid var(--gray-200)"
          />
          <FormContainer
            productCode="/avatar4@2x.png"
            price="$120"
            propBorderBottom="1px solid var(--gray-200)"
            propBorderBottom1="1px solid var(--gray-200)"
          />
          <FormContainer
            productCode="/avatar4@2x.png"
            price="$68"
            propBorderBottom="unset"
            propBorderBottom1="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default TopEmployeeLanguagePairContain;
